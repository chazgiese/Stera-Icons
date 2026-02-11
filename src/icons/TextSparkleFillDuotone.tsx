import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSparkleFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSparkleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-sparkle-fill-duotone" {...props}>
      <path d="M8 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM8 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.19 3.2l.7.24a.65.65 0 0 1 0 1.22l-.7.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.19-3.2l-.7-.24a.65.65 0 0 1 0-1.22l.7-.25a5.2 5.2 0 0 0 3.2-3.19z" />
    </IconBase>
  ))
);

TextSparkleFillDuotone.displayName = 'TextSparkleFillDuotone';

// Triple export pattern (lucide-react style)
export { TextSparkleFillDuotone, TextSparkleFillDuotone as TextSparkleFillDuotoneIcon, TextSparkleFillDuotone as SiTextSparkleFillDuotone };
export default TextSparkleFillDuotone;
export type { TextSparkleFillDuotoneProps };
