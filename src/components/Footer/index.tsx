import { Container, Direitos, Midias } from './styles'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export function Footer() {
  return (
    <Container>
      <Direitos>
        <p>&copy; 2022 | Desenvolvido por Alexsandro Silva.</p>
      </Direitos>
      <Midias>
        <h3>Conecte-se</h3>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/alexsandro-cristiano"
              target="_blank"
            >
              <FiLinkedin size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/alexsandro-cristiano" target="_blank">
              <FiGithub size={24} />
            </a>
          </li>
        </ul>
      </Midias>
    </Container>
  )
}
