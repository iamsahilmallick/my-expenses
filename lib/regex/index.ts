const phoneRegex = /^(?:\+?\d{1,4}[\s-]?)?(?:\(?\d+\)?[\s-]?)*\d[\d\s-]{6,10}\d$/;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
const positiveNumberRegex = /^\d*\.?\d+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export { emailRegex, passwordRegex, phoneRegex, positiveNumberRegex };
