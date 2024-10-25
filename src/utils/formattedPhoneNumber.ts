/**
 * Formats a phone number to include the country code.
 * @param {string} phoneNumber - The phone number entered by the user.
 * @returns {string} - The formatted phone number.
 */
export function formatPhoneNumber(phoneNumber: string): string {

    const cleanNumber = phoneNumber.replace(/\D/g, '');

    if (cleanNumber.startsWith('0')) {
        return '254' + cleanNumber.substring(1); // Remove '0' and prepend '254'
    }

    return cleanNumber.startsWith('254') ? cleanNumber : '254' + cleanNumber;
}
