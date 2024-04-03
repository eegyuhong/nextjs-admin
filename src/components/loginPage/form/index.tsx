'use client';

import { Button, Checkbox, Form, FormProps, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { signIn } from 'next-auth/react';

type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};

const { Item } = Form;
const { Password } = Input;

export default function LonginForm() {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    signIn('credentials', { email: values.email, password: values.password });
  };

  return (
    <Form className="w-[400px]" size="large" onFinish={onFinish}>
      <Item
        name="email"
        rules={[{ required: true, message: '이메일 주소를 확인하세요' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="이메일 주소 입력" />
      </Item>
      <Item
        name="password"
        rules={[{ required: true, message: '비밀번호를 확인하세요' }]}
      >
        <Password prefix={<LockOutlined />} placeholder="비밀번호 입력" />
      </Item>
      <Item name="remember" valuePropName="checked">
        <Checkbox>아이디 저장</Checkbox>
      </Item>
      <Item>
        <Button type="primary" htmlType="submit" block>
          로그인
        </Button>
      </Item>
    </Form>
  );
}
