import { Box, Stack, styled, Typography } from '@mui/material';

interface EmojiPickerCardProps {
  title?: string;
  emojis: string[];
  onSelect?: (emoji: string) => void;
}

export const EmojiCardWrapper = styled(Stack)`
  width: 100%;
  max-width: 400px;
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  gap: 8px;

  .emoji-card-title {
    font-size: 15px;
    font-weight: 500;
    color: #134e5e;
  }

  .emoji-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-height: 150px;
    overflow-y: auto;

    /* Custom scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #191919 #012b3f31;

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.palette.customColors?.color1D1D1D};
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.palette.customColors?.color1D1D1D};
      border-radius: 10px;
      border: 2px solid #f0f0f0;
    }

    &::-webkit-scrollbar-thumb:hover {
      background-color: ${({ theme }) => theme.palette.customColors?.color1D1D1D};
    }
  }

  .emoji-item {
    font-size: 24px;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;

    &:hover {
      background-color: #f0f0f0;
      transform: scale(1.1);
    }
  }
`;

const EmojiPickerCard: React.FC<EmojiPickerCardProps> = ({
  title = 'Choose Emoji:',
  emojis,
  onSelect,
}) => {
  return (
    <EmojiCardWrapper direction="column">
      <Typography className="emoji-card-title">{title}</Typography>
      <Box className="emoji-list">
        {emojis.map((emoji, index) => (
          <Box key={index} className="emoji-item" onClick={() => onSelect?.(emoji)}>
            {emoji}
          </Box>
        ))}
      </Box>
    </EmojiCardWrapper>
  );
};

export default EmojiPickerCard;
