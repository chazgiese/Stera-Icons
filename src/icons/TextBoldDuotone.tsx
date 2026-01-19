import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-bold-duotone" {...props}>
      <path fill="currentColor" d="M15 20a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM18 2a3 3 0 0 1 3 3v1a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V5a3 3 0 0 1 3-3z" />
        <path fill="currentColor" fillRule="evenodd" d="M11 5a1 1 0 0 0-1-1h4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h-4a1 1 0 0 0 1-1z" clipRule="evenodd" opacity={.4} />
    </IconBase>
  ))
);

TextBoldDuotone.displayName = 'TextBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextBoldDuotone, TextBoldDuotone as TextBoldDuotoneIcon, TextBoldDuotone as SiTextBoldDuotone };
export default TextBoldDuotone;
export type { TextBoldDuotoneProps };
