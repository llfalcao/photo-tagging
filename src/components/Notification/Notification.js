import * as S from './styles';

const Message = ({ msg, hideNotification }) => {
  if (msg.isCorrect) {
    return (
      <S.MsgCorrect onAnimationEnd={hideNotification}>
        You found {msg.character}!
      </S.MsgCorrect>
    );
  } else {
    return (
      <S.MsgIncorrect onAnimationEnd={hideNotification}>
        The character selected is not here.
      </S.MsgIncorrect>
    );
  }
};

export default Message;
