import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextUnderlineRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextUnderlineRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextUnderlineRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-underline-duotone" {...props}>
      <path d="M18 19.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5z" opacity={.4} />
        <path d="M17.5 3.25c.41 0 .75.34.75.75v7a6.25 6.25 0 1 1-12.5 0V4a.75.75 0 0 1 1.5 0v7a4.75 4.75 0 1 0 9.5 0V4c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

TextUnderlineRegularDuotone.displayName = 'TextUnderlineRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextUnderlineRegularDuotone, TextUnderlineRegularDuotone as TextUnderlineRegularDuotoneIcon, TextUnderlineRegularDuotone as SiTextUnderlineRegularDuotone };
export default TextUnderlineRegularDuotone;
export type { TextUnderlineRegularDuotoneProps };
