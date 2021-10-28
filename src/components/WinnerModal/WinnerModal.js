import { useState } from 'react/cjs/react.development';
import { saveGame } from '../../web';
import * as S from './styles';

const WinnerModal = ({ time, loadLeaderboards }) => {
  const { date, total } = time;
  const formattedDate = date.toISOString().substring(0, 10);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(true);
  const [inputError, setInputError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const regex =
      /^([a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9_-]+\s)*[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9_-]+$/;
    if (!regex.test(name) || name.length > 32) {
      setInputError(true);
    } else {
      setLoading(true);
      saveGame(name, formattedDate, total).then(() => {
        setInputError(false);
        setLoading(false);
        setIsSaved(true);
      });
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
              <span>(optional)</span>
              Save your game time:
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

            {inputError ? (
              <S.Error>
                <p>Your nickname must meet the following requirements:</p>
                <li>At least one letter</li>
                <li>No more than 32 characters</li>
                <li>No space at the beginning or at the end</li>
                <li>At most one space between names/words</li>
              </S.Error>
            ) : null}

            <S.BtnSubmit type="submit" onClick={handleSubmit}>
              {loading ? (
                <S.LoadingIcon
                  height="24px"
                  width="24px"
                  fill="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 100 100"
                >
                  <g>
                    <path d="M20.1,67.4c-1.3-2.1-4-2.9-6.1-1.6c-2.1,1.3-2.9,4-1.6,6.1c0.8,1.4,2.3,2.2,3.9,2.2c0.8,0,1.5-0.2,2.3-0.6   C20.6,72.3,21.3,69.5,20.1,67.4z" />
                    <path d="M50.1,84.6c-2.5,0-4.5,2-4.5,4.5c0,2.5,2,4.5,4.5,4.5c0,0,0,0,0,0c2.5,0,4.5-2,4.5-4.5C54.6,86.6,52.6,84.6,50.1,84.6z" />
                    <path d="M80,67.3c-1.2,2.1-0.5,4.9,1.7,6.1c0.7,0.4,1.5,0.6,2.3,0.6c1.5,0,3.1-0.8,3.9-2.3c1.2-2.1,0.5-4.9-1.6-6.1   C84,64.4,81.2,65.1,80,67.3z" />
                    <path d="M32.8,80c-2.2-1.2-4.9-0.5-6.1,1.7c-1.2,2.2-0.5,4.9,1.6,6.1c0.7,0.4,1.5,0.6,2.3,0.6c1.5,0,3.1-0.8,3.9-2.3   C35.7,84,34.9,81.3,32.8,80z" />
                    <path d="M84.6,50c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5c0-2.5-2-4.5-4.5-4.5C86.6,45.5,84.6,47.5,84.6,50z" />
                    <path d="M83.9,34.9c0.8,0,1.5-0.2,2.3-0.6c2.1-1.3,2.9-4,1.6-6.2c-1.3-2.1-4-2.9-6.1-1.6c-2.1,1.2-2.9,4-1.6,6.1   C80.8,34.1,82.3,34.9,83.9,34.9z" />
                    <path d="M67.3,20c0.7,0.4,1.5,0.6,2.3,0.6c1.6,0,3.1-0.8,3.9-2.2c1.3-2.1,0.5-4.9-1.6-6.1c-2.1-1.3-4.9-0.5-6.1,1.6   C64.4,16,65.2,18.8,67.3,20z" />
                    <path d="M73.5,81.6c-1.3-2.2-4-2.9-6.1-1.6c-2.1,1.3-2.9,4-1.6,6.2c0.8,1.4,2.4,2.2,3.9,2.2c0.8,0,1.5-0.2,2.3-0.6c0,0,0,0,0,0   C74,86.5,74.8,83.7,73.5,81.6z" />
                    <path d="M10.9,54.5c2.5,0,4.5-2,4.5-4.5c0-19.1,15.5-34.6,34.6-34.6c2.5,0,4.5-2,4.5-4.5s-2-4.5-4.5-4.5C26,6.4,6.4,26,6.4,50   C6.4,52.5,8.4,54.5,10.9,54.5z" />
                  </g>
                </S.LoadingIcon>
              ) : (
                'Submit'
              )}
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

          {isSaved ? (
            <S.MsgSuccess>
              <p>
                All done! You can{' '}
                <button type="button" onClick={loadLeaderboards}>
                  view your ranking here.
                </button>
              </p>
              <p>Thanks for playing!</p>
            </S.MsgSuccess>
          ) : null}
        </S.ModalContainer>
      ) : null}
    </>
  );
};

export default WinnerModal;
