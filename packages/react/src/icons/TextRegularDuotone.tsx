import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M14 3.75c-.69 0-1.25.56-1.25 1.25v14c0 .69.56 1.25 1.25 1.25h-4c.69 0 1.25-.56 1.25-1.25V5c0-.69-.56-1.25-1.25-1.25z" opacity={.4} />
        <path fill="currentColor" d="M15 20.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM18 2.25A2.75 2.75 0 0 1 20.75 5v1a.75.75 0 0 1-1.5 0V5c0-.69-.56-1.25-1.25-1.25H6c-.69 0-1.25.56-1.25 1.25v1a.75.75 0 0 1-1.5 0V5A2.75 2.75 0 0 1 6 2.25z" />
    </IconBase>
  ))
);

TextRegularDuotone.displayName = 'TextRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextRegularDuotone, TextRegularDuotone as TextRegularDuotoneIcon, TextRegularDuotone as SiTextRegularDuotone };
export type { TextRegularDuotoneProps };
