// utils/formatDate.ts
export function formatDateTime(
    date: Date | string,
    locale: string = 'en-US',
    timeZone: string = 'Africa/Nairobi'
): string {
    // Convert to Date object if the input is a string
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    // Options for formatting the date with timezone
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone, // Set the timeZone option to 'Africa/Nairobi'
    };

    // Format the date using Intl.DateTimeFormat
    return new Intl.DateTimeFormat(locale, options).format(dateObj);
}
