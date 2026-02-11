import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-bold-duotone" {...props}>
      <path d="M14 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h-4a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" opacity={.4} />
        <path d="M15 19a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2zM17 3a3 3 0 0 1 3 3 1 1 0 0 1-2 .1v-.2a1 1 0 0 0-1-.9H7a1 1 0 0 0-1 .9v.2A1 1 0 0 1 4 6a3 3 0 0 1 3-3z" />
    </IconBase>
  ))
);

TextBoldDuotone.displayName = 'TextBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextBoldDuotone, TextBoldDuotone as TextBoldDuotoneIcon, TextBoldDuotone as SiTextBoldDuotone };
export default TextBoldDuotone;
export type { TextBoldDuotoneProps };
