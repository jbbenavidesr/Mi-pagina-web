module.exports = function (date, options) {
    let {locale, weekday, year, month, day} = Object.assign(
        {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            locale: 'es',
        },
        options
    );
    return new Date(date).toLocaleDateString(locale, {
        weekday,
        year,
        month,
        day,
    });
};
