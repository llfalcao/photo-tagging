import * as S from './styles';

const Message = ({ msg, hideMessage }) => {
  if (msg.isCorrect) {
    return (
      <S.MsgCorrect onAnimationEnd={hideMessage}>
        You found {msg.character}!
      </S.MsgCorrect>
    );
  } else {
    return (
      <S.MsgIncorrect onAnimationEnd={hideMessage}>
        The character selected is not here.
      </S.MsgIncorrect>
    );
  }
};

export default Message;
