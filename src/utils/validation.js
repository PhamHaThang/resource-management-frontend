export const validators = {
  required: (message = "Trường này là bắt buộc") => ({
    required: message,
  }),
  email: (message = "Email không hợp lệ") => ({
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message,
    },
  }),
  password: (message = "Mật khẩu phải có ít nhất 6 ký tự") => ({
    minLength: {
      value: 6,
      message,
    },
  }),
};
