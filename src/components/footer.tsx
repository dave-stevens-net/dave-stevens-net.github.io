import * as React from 'react'
import { styles } from './footer.styles'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import Obfuscate from 'react-obfuscate'

const Footer: React.FC = () => {
  const phoneNumber = parsePhoneNumberFromString('850-363-0607', 'US')

  return (
    <div className={styles.footer}>
      <div className={styles.address}>
        <span className={styles.addressPart}>
          Some stuff goes here
        </span>
        {phoneNumber !== undefined && (
          <div className={styles.addressPart}>
            <div className={styles.spacer}>•</div>
            <div className={styles.contactLink}>
              <Obfuscate href={phoneNumber.getURI()}>
                {phoneNumber.formatNational()}
              </Obfuscate>
            </div>
          </div>
        )}
        <div className={styles.addressPart}>
          <div className={styles.spacer}>•</div>
          <div className={styles.contactLink}>
            <Obfuscate email="dave521@protonmail.com">
              dave521@protonmail.com
            </Obfuscate>
          </div>
        </div>
      </div>
      <div className={styles.footerText}>footer text</div>
    </div>
  )
}

export default Footer
