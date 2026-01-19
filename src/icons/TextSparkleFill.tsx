import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSparkleFillProps = Omit<IconBaseProps, 'children'>;

const TextSparkleFill = memo(
  forwardRef<SVGSVGElement, TextSparkleFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-sparkle-fill" {...props}>
      <path fill="currentColor" d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.2-3.2l-.68-.24a.65.65 0 0 1 0-1.22l.69-.25a5.2 5.2 0 0 0 3.2-3.2zM8 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM8 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" />
    </IconBase>
  ))
);

TextSparkleFill.displayName = 'TextSparkleFill';

// Triple export pattern (lucide-react style)
export { TextSparkleFill, TextSparkleFill as TextSparkleFillIcon, TextSparkleFill as SiTextSparkleFill };
export type { TextSparkleFillProps };
