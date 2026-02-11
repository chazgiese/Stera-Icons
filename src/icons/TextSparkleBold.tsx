import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSparkleBoldProps = Omit<IconBaseProps, 'children'>;

const TextSparkleBold = memo(
  forwardRef<SVGSVGElement, TextSparkleBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-sparkle-bold" {...props}>
      <path d="M16.39 10.26a.65.65 0 0 1 1.22 0l.25.69a5.2 5.2 0 0 0 3.2 3.2l.68.24a.65.65 0 0 1 0 1.22l-.69.25a5.2 5.2 0 0 0-3.2 3.2l-.24.68a.65.65 0 0 1-1.22 0l-.25-.69a5.2 5.2 0 0 0-3.2-3.2l-.68-.24a.65.65 0 0 1 0-1.22l.69-.25a5.2 5.2 0 0 0 3.2-3.2zM8.1 17a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M8.1 11a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2h5.1M21 5a1 1 0 1 1 0 2H3a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

TextSparkleBold.displayName = 'TextSparkleBold';

// Triple export pattern (lucide-react style)
export { TextSparkleBold, TextSparkleBold as TextSparkleBoldIcon, TextSparkleBold as SiTextSparkleBold };
export default TextSparkleBold;
export type { TextSparkleBoldProps };
