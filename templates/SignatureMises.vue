<template>
  <table
    :style="`font-family: ${styles.fontFamily.styleName}; color: #4A5568;`"
  >
    <tbody>
      <v-signature-logo
        component="tr"
        :field="fields[SIGNATURE_FIELDS.LOGO]"
        :link="fields[SIGNATURE_FIELDS.LOGO_LINK]"
        v-if="fields[SIGNATURE_FIELDS.LOGO].active"
      />
      <v-signature-vertical-space v-if="fields[SIGNATURE_FIELDS.LOGO].active" />
      <tr>
        <table>
          <tbody>
            <tr>
              <td>
                <span
                  v-if="fields[SIGNATURE_FIELDS.FULL_NAME].active"
                  style="font-weight: bold"
                  >{{ fields[SIGNATURE_FIELDS.FULL_NAME].model }}</span
                >
              </td>
            </tr>
            <tr>
              <td>
                <v-signature-p v-if="fields[SIGNATURE_FIELDS.POSITION].active">
                  {{ fields[SIGNATURE_FIELDS.POSITION].model }}
                </v-signature-p>
              </td>
            </tr>
            <tr>
              <td>
                <v-signature-vertical-space
                  v-if="isRightTop && isRightMiddle"
                />
              </td>
            </tr>
            <tr>
              <td>
                <v-signature-p
                  v-if="fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].active"
                  style="font-weight: bold"
                >
                  {{
                    fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].model
                  }}</v-signature-p
                >
              </td>
            </tr>
            <tr>
              <td>
                <v-signature-p v-if="fields[SIGNATURE_FIELDS.ADDRESS].active">
                  {{ fields[SIGNATURE_FIELDS.ADDRESS].model }}</v-signature-p
                >
              </td>
            </tr>
            <tr>
              <td>
                <v-signature-a
                  :color="styles.secondaryColor"
                  :href="`tel:${
                    fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].model
                  }`"
                  v-if="fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active"
                >
                  {{
                    fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].model
                  }}</v-signature-a
                >
                <v-signature-horizontal-inline-space
                  :color="styles.primaryColor"
                  v-if="
                    fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active &&
                    fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active
                  "
                />
                <v-signature-a
                  :color="styles.secondaryColor"
                  :href="`tel:${fields[SIGNATURE_FIELDS.PERSONAL_PHONE].model}`"
                  v-if="fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active"
                >
                  {{
                    fields[SIGNATURE_FIELDS.PERSONAL_PHONE].model
                  }}</v-signature-a
                >
              </td>
            </tr>
            <tr
              v-if="
                fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active ||
                fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].active
              "
            >
              <v-signature-a
                :color="styles.secondaryColor"
                :href="`mailto:${
                  fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].model
                }`"
                v-if="fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active"
                >{{
                  fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].model
                }}</v-signature-a
              >
              <v-signature-horizontal-inline-space
                :color="styles.primaryColor"
                v-if="
                  fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active &&
                  fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].active
                "
              />
              <v-signature-a
                :color="styles.secondaryColor"
                :href="`mailto:${
                  fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].model
                }`"
                v-if="fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].active"
                >{{
                  fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].model
                }}</v-signature-a
              >
            </tr>
            <tr>
              <td>
                <v-signature-a
                  :color="styles.secondaryColor"
                  :href="addHttps(fields[SIGNATURE_FIELDS.WEBSITE].model)"
                  v-if="fields[SIGNATURE_FIELDS.WEBSITE].active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ fields[SIGNATURE_FIELDS.WEBSITE].model }}</v-signature-a
                >
              </td>
            </tr>
            <tr>
              <td>
                <v-signature-vertical-space
                  v-if="(isRightTop || isRightMiddle) && isRightBottom"
                />
              </td>
            </tr>
            <tr>
              <v-signatures-socials :color="styles.primaryColor" />
            </tr>
          </tbody>
        </table>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { SIGNATURE_FIELDS, addHttps } from "assets"
// import { mapState } from "XXX"

export default {
  data() {
    return {
      SIGNATURE_FIELDS,
    }
  },
  computed: {
    ...mapState({
      fields: (state) => state.signatures.fields,
      socials: (state) => state.signatures.socials,
      styles: (state) => state.signatures.styles,
    }),
    isRightTop() {
      return (
        this.fields[SIGNATURE_FIELDS.FULL_NAME].active ||
        this.fields[SIGNATURE_FIELDS.POSITION].active
      )
    },
    isRightMiddle() {
      return (
        this.fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].active ||
        this.fields[SIGNATURE_FIELDS.ADDRESS].active ||
        this.fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active ||
        this.fields[SIGNATURE_FIELDS.WEBSITE].active
      )
    },
    isRightBottom() {
      // if any social link is active
      return Object.keys(this.socials).some((item) => this.socials[item].active)
    },
  },
  methods: {
    addHttps,
  },
}
</script>
