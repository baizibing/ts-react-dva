import React, { Component } from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { connect } from 'dva';
import { userLogin } from 'src/api/user';
import { setSession } from 'src/utils';

/* eslint react/prop-types: 0 */

@connect((store) => {
  return store.user;
})
class Login extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        userLogin(values).then(res => {
          setSession('userToken', res.data.token)
          setSession('userId', res.data.uid)
        })
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className='wraper pl15 pr15'>
        <h3 className='mt25 text-center'>登录</h3>
        <Row className='mt25'>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12, offset: 6 }}
            md={{ span: 6, offset: 9 }}>
            <Form onSubmit={(e) => this.handleSubmit(e)} className='login-form'>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                    { required: true, message: 'Please input your username!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder='Username'
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    { required: true, message: 'Please input your Password!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type='password'
                    placeholder='Password'
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Form.create({ name: 'normal_login' })(Login);
