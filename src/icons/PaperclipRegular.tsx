import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PaperclipRegularProps = Omit<IconBaseProps, 'children'>;

const PaperclipRegular = memo(
  forwardRef<SVGSVGElement, PaperclipRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="paperclip" {...props}>
      <path fill="currentColor" d="M10 1.25A4.75 4.75 0 0 1 14.75 6v9a2.75 2.75 0 1 1-5.5 0V8a.75.75 0 0 1 1.5 0v7a1.25 1.25 0 1 0 2.5 0V6a3.25 3.25 0 0 0-6.5 0v10a5.25 5.25 0 1 0 10.5 0V8a.75.75 0 0 1 1.5 0v8a6.75 6.75 0 0 1-13.5 0V6A4.75 4.75 0 0 1 10 1.25" />
    </IconBase>
  ))
);

PaperclipRegular.displayName = 'PaperclipRegular';

// Triple export pattern (lucide-react style)
export { PaperclipRegular, PaperclipRegular as PaperclipRegularIcon, PaperclipRegular as SiPaperclipRegular };
export default PaperclipRegular;
export type { PaperclipRegularProps };
