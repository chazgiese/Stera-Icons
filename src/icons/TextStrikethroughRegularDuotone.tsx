import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextStrikethroughRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextStrikethroughRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextStrikethroughRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-strikethrough-duotone" {...props}>
      <path d="M17.46 12.75a4.73 4.73 0 0 1-3.46 8H7a.75.75 0 0 1 0-1.5h7a3.25 3.25 0 0 0 0-6.5zM17 3.25a.75.75 0 0 1 0 1.5h-6a3.25 3.25 0 1 0 0 6.5H7.54a4.73 4.73 0 0 1 3.46-8z" opacity={0.4} />
        <path d="M21 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

TextStrikethroughRegularDuotone.displayName = 'TextStrikethroughRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextStrikethroughRegularDuotone, TextStrikethroughRegularDuotone as TextStrikethroughRegularDuotoneIcon, TextStrikethroughRegularDuotone as SiTextStrikethroughRegularDuotone };
export default TextStrikethroughRegularDuotone;
export type { TextStrikethroughRegularDuotoneProps };
