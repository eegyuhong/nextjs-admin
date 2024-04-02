'use client';

import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';

const { Item } = Form;
const { Password } = Input;

export default function LonginForm() {
  return (
    <Form className="w-[400px]" size="large">
      <Item
        name="username"
        rules={[{ required: true, message: '아이디를 확인하세요' }]}
      >
        <Input prefix={<UserOutlined />} placeholder="아이디 입력" />
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
