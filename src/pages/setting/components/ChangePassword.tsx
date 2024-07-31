import { Flex, Form, Input, Typography } from "antd";
import styles from "./ChangePassword.module.scss";
import { ButtonConfig } from "../../../components/buttonconfig";

type FieldType = {
    old_password?: string;
    password?: string;
};

const { Text } = Typography;

export function ChangePassword() {
    const [formChangePassword] = Form.useForm();

    const formLabel = (value: string) => <Text strong>{value}</Text>;

    const handleResetAll = () => {
        formChangePassword.resetFields();
    };

    const onFinish = (values: FieldType) => {
        const draftData = {
            old_password: values.old_password,
            password: values.password,
        };
        console.log(draftData);
    };

    return (
        <div className={styles.container}>
            <Form
                form={formChangePassword}
                name="changepassword"
                scrollToFirstError
                style={{ paddingBlock: 32, width: "100%" }}
                labelCol={{ span: 5 }}
                wrapperCol={{ span: 24 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                layout={"vertical"}
            >
                <Form.Item wrapperCol={{ offset: 0 }}>
                    <Flex gap="small">
                        <ButtonConfig
                            className={"button-submit"}
                            type="primary"
                            htmlType={"submit"}
                            lable={"Submit"}
                        />
                        <ButtonConfig
                            danger
                            onClick={handleResetAll}
                            lable={"Reset all"}
                        />
                    </Flex>
                </Form.Item>
                <Form.Item<FieldType>
                    label={formLabel("Old Password")}
                    name="old_password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your old password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item<FieldType>
                    label={formLabel("New Password")}
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your new password!",
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
            </Form>
        </div>
    );
}
