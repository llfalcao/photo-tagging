import { useState } from 'react/cjs/react.development';
import { saveGame } from '../../web';
import * as S from './styles';

const WinnerModal = ({ time }) => {
  const { total } = time;
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(true);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regex =
      /^([a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9_-]+\s)*[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9_-]+$/;
    if (!regex.test(name)) {
      // TODO: Show error message under the input field
    } else {
      saveGame(name, total);
    }
  }

  function hideModal() {
    setVisible(false);
  }

  return (
    <>
      {visible ? (
        <S.ModalContainer>
          <S.Title>Great job!</S.Title>
          <S.Subtitle>Total time: {total}</S.Subtitle>
          <S.Form onSubmit={handleSubmit}>
            <S.Legend>
              Save your game time: <span>(optional)</span>
            </S.Legend>

            <S.InputWrapper>
              <S.Input
                type="text"
                placeholder=""
                value={name}
                onChange={handleNameChange}
              />
              <S.Label>Nickname</S.Label>
            </S.InputWrapper>

            <S.BtnSubmit type="submit" onClick={handleSubmit}>
              Submit
            </S.BtnSubmit>
          </S.Form>

          <S.BtnCloseMenu onClick={hideModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
            </svg>
          </S.BtnCloseMenu>
        </S.ModalContainer>
      ) : null}
    </>
  );
};

export default WinnerModal;
