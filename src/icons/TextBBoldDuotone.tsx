import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextBBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextBBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-bold-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M7 22H6a1 1 0 0 1-1-.9V3a1 1 0 0 1 1-1h1z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12.5 2a5.5 5.5 0 0 1 3.93 9.35A5.5 5.5 0 0 1 14.5 22H7v-2h7.5a3.5 3.5 0 1 0 0-7H7v-2h5.5a3.5 3.5 0 1 0 0-7H7V2z" />
    </IconBase>
  ))
);

TextBBoldDuotone.displayName = 'TextBBoldDuotone';

// Triple export pattern (lucide-react style)
export { TextBBoldDuotone, TextBBoldDuotone as TextBBoldDuotoneIcon, TextBBoldDuotone as SiTextBBoldDuotone };
export default TextBBoldDuotone;
export type { TextBBoldDuotoneProps };
