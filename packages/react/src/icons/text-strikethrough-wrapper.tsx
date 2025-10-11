import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextStrikethroughIcon as TextStrikethroughIconRegular } from './text-strikethrough';
import { TextStrikethroughIconBold } from './text-strikethrough-bold';
import { TextStrikethroughIconFilled } from './text-strikethrough-filled';

export type IconVariant = 'regular' | 'bold' | 'filled';

export interface TextStrikethroughIconProps extends IconProps {
  variant?: IconVariant;
}

const TextStrikethroughIcon = memo(forwardRef<SVGSVGElement, TextStrikethroughIconProps>(({ 
  variant = 'regular',
  ...props 
}, ref) => {
  switch (variant) {
    case 'filled':
      return <TextStrikethroughIconFilled ref={ref} {...props} />;
    case 'bold':
      return <TextStrikethroughIconBold ref={ref} {...props} />;
    case 'regular':
    default:
      return <TextStrikethroughIconRegular ref={ref} {...props} />;
  }
}));

TextStrikethroughIcon.displayName = 'TextStrikethroughIcon';

export { TextStrikethroughIcon };
