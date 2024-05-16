<template>
  <table
    :style="`font-family: ${styles.fontFamily.styleName}; color: #4A5568;`"
  >
    <tbody>
      <tr>
        <v-signature-logo
          :field="fields[SIGNATURE_FIELDS.LOGO]"
          :link="fields[SIGNATURE_FIELDS.LOGO_LINK]"
          v-if="fields[SIGNATURE_FIELDS.LOGO].active"
        />
        <v-signature-horizontal-space
          :width="30"
          v-if="fields[SIGNATURE_FIELDS.LOGO].active"
        />
        <td>
          <table>
            <tbody>
              <tr>
                <td>
                  <span
                    v-if="fields[SIGNATURE_FIELDS.FULL_NAME].active"
                    style="font-weight: bold"
                    >{{ fields[SIGNATURE_FIELDS.FULL_NAME].model }}</span
                  >
                  <v-signature-horizontal-inline-space
                    :color="styles.primaryColor"
                    v-if="
                      fields[SIGNATURE_FIELDS.FULL_NAME].active &&
                      fields[SIGNATURE_FIELDS.POSITION].active
                    "
                  />
                  <span v-if="fields[SIGNATURE_FIELDS.POSITION].active">{{
                    fields[SIGNATURE_FIELDS.POSITION].model
                  }}</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span
                    v-if="fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].active"
                    style="font-weight: bold"
                    >{{ fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].model }}
                  </span>
                  <v-signature-horizontal-inline-space
                    :color="styles.primaryColor"
                    v-if="
                      fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].active &&
                      fields[SIGNATURE_FIELDS.ADDRESS].active
                    "
                  />
                  <span v-if="fields[SIGNATURE_FIELDS.ADDRESS].active">{{
                    fields[SIGNATURE_FIELDS.ADDRESS].model
                  }}</span>
                  <v-signature-horizontal-inline-space
                    :color="styles.primaryColor"
                    v-if="
                      fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].active &&
                      (fields[SIGNATURE_FIELDS.ORGANIZATION_NAME].active ||
                        fields[SIGNATURE_FIELDS.ADDRESS].active)
                    "
                  />
                  <span
                    v-if="fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].active"
                    >{{
                      fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].model
                    }}</span
                  >
                </td>
              </tr>
              <tr>
                <td>
                  <span v-if="fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active">{{
                    fields[SIGNATURE_FIELDS.PERSONAL_PHONE].model
                  }}</span>
                  <v-signature-horizontal-inline-space
                    v-if="isFirstPart"
                    :color="styles.primaryColor"
                  />
                  <span
                    v-if="fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active"
                  >
                    {{
                      fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].model
                    }}</span
                  >
                  <v-signature-horizontal-inline-space
                    v-if="isSecondPart"
                    :color="styles.primaryColor"
                  />
                  <v-signature-a
                    :color="styles.secondaryColor"
                    :href="`mailto:${
                      fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].model
                    }`"
                    v-if="fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active"
                  >
                    {{
                      fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].model
                    }}</v-signature-a
                  >
                  <v-signature-horizontal-inline-space
                    :color="styles.primaryColor"
                    v-if="isThirdPart"
                  />
                  <span v-if="fields[SIGNATURE_FIELDS.WEBSITE].active">{{
                    fields[SIGNATURE_FIELDS.WEBSITE].model
                  }}</span>
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
        </td>
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
        this.fields[SIGNATURE_FIELDS.WEBSITE].active ||
        this.fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active ||
        this.fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active ||
        this.fields[SIGNATURE_FIELDS.ORGANIZATION_EMAIL].active
      )
    },
    isRightBottom() {
      // if any social link is active
      return Object.keys(this.socials).some((item) => this.socials[item].active)
    },

    isFirstPart() {
      return (
        this.fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active &&
        this.fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active
      )
    },
    isSecondPart() {
      return (
        (this.fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active ||
          this.fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active) &&
        this.fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active
      )
    },
    isThirdPart() {
      return (
        (this.fields[SIGNATURE_FIELDS.PERSONAL_PHONE].active ||
          this.fields[SIGNATURE_FIELDS.ORGANIZATION_PHONE].active ||
          this.fields[SIGNATURE_FIELDS.PERSONAL_EMAIL].active) &&
        this.fields[SIGNATURE_FIELDS.WEBSITE].active
      )
    },
  },
  methods: {
    addHttps,
  },
}
</script>
