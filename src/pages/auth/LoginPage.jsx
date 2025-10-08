import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
export default function LoginPage() {
  return (
    <Card>
      <CardHeader title="Đăng nhập" />
      <CardContent>
        <div className="space-y-4">
          <Input placeholder="Email" />
          <Input type="password" placeholder="Mật khẩu" />
          <Button className="w-full">Đăng nhập</Button>
        </div>
      </CardContent>
    </Card>
  );
}
