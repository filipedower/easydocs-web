import { UserOutlined, EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import { RegularInput, PasswordInput } from '../../components/Input';
import { RegularButton } from '../../components/Button';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style'

const logo = require('../../assets/logo.png'); 

const Login = (): JSX.Element => {
    const navigate = useNavigate()
    return (
        <S.Wrapper>
                <img src={logo} width={'16%'} height={'100px'} style={{ marginTop: '120px' }} alt='LoginImage'/>
                <S.FormContainer>
                    <RegularInput 
                        placeholder='Usuário' 
                        suffix={<UserOutlined />} 
                    />
                    <PasswordInput
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} 
                        placeholder='Senha' 
                    />
                    <S.CreateAcc>Primeiro Acesso? <a href='/' style={{ textDecoration: 'none', color: 'red' }}>Clique aqui.</a></S.CreateAcc>
                    <RegularButton onClick={() => {
                        navigate('/home')
                    }}>Entrar</RegularButton>
                </S.FormContainer>
        </S.Wrapper>
    )
}

export default Login