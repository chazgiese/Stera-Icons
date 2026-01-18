import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HashItalicBoldProps = Omit<IconBaseProps, 'children'>;

const HashItalicBold = memo(
  forwardRef<SVGSVGElement, HashItalicBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M16.02 2.78a1 1 0 0 1 1.96.44L16.9 8H21a1 1 0 1 1 0 2h-4.53l-.89 4H19a1 1 0 1 1 0 2h-3.86l-1.16 5.22a1 1 0 0 1-1.96-.44L13.1 16H9.14l-1.16 5.22a1 1 0 0 1-1.96-.44L7.1 16H3a1 1 0 0 1 0-2h4.53l.89-4H5a1 1 0 0 1 0-2h3.86l1.16-5.22a1 1 0 0 1 1.96.44L10.9 8h3.95zM9.58 14h3.95l.89-4h-3.95z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicBold.displayName = 'HashItalicBold';

// Triple export pattern (lucide-react style)
export { HashItalicBold, HashItalicBold as HashItalicBoldIcon, HashItalicBold as SiHashItalicBold };
export type { HashItalicBoldProps };
