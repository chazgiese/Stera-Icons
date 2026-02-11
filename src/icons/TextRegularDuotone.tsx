import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-duotone" {...props}>
      <path d="M14 4.75c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h-4c.69 0 1.25-.56 1.25-1.25V6c0-.69-.56-1.25-1.25-1.25z" opacity={.4} />
        <path d="M15 19.25a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1 0-1.5zM17 3.25A2.75 2.75 0 0 1 19.75 6a.75.75 0 0 1-1.5 0c0-.69-.56-1.25-1.25-1.25H7c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0A2.75 2.75 0 0 1 7 3.25z" />
    </IconBase>
  ))
);

TextRegularDuotone.displayName = 'TextRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextRegularDuotone, TextRegularDuotone as TextRegularDuotoneIcon, TextRegularDuotone as SiTextRegularDuotone };
export default TextRegularDuotone;
export type { TextRegularDuotoneProps };
