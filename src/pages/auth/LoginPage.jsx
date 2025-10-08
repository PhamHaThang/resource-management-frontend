import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { login } from "../../api/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { validators } from "../../utils/validation";
export default function LoginPage() {
  const navigate = useNavigate();
  const { login: authLogin } = useAuth();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await login(data);
      const { user, token } = response.data.data;
      authLogin(user, token);
      toast.success(`Chào mừng trở lại, ${user.name}!`);
      navigate("/");
    } catch (error) {
      console.log(error);
      const message = error.response?.data?.message || "Đăng nhập thất bại";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card>
      <CardHeader
        title="Đăng nhập"
        description="Chào mừng trở lại hệ thống quản lý"
      />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input
              type="email"
              placeholder="your.email@example.com"
              error={errors.email}
              {...register("email", {
                ...validators.required(),
                ...validators.email(),
              })}
            />
            {errors.email && (
              <p className="text-sm text-danger mt-1">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mật khẩu</label>
            <Input
              type="password"
              placeholder="••••••••"
              error={errors.password}
              {...register("password", validators.required())}
            />
            {errors.password && (
              <p className="text-sm text-danger mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </Button>
        </form>
        <p className="text-sm text-center mt-4">
          Chưa có tài khoản?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-primary-600 hover:underline">
            Đăng ký ngay
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}
