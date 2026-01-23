import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CoolSBoldProps = Omit<IconBaseProps, 'children'>;

const CoolSBold = memo(
  forwardRef<SVGSVGElement, CoolSBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="cool-s-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.52 1.12a1 1 0 0 1 1.1.1l5 4A1 1 0 0 1 18 6v4a1 1 0 0 1-1 1h-1.59l2.3 2.3a1 1 0 0 1 .29.7v4a1 1 0 0 1-.37.78l-5 4a1 1 0 0 1-1.26 0l-5-4A1 1 0 0 1 6 18v-4a1 1 0 0 1 1-1h1.59l-2.3-2.3A1 1 0 0 1 6 10V6c0-.3.14-.6.38-.78l5-4zM8 6.48v3.1l4.7 4.71a1 1 0 0 1 .3.71v2a1 1 0 1 1-2 0v-1.59l-.41-.41H8v2.52l4 3.2 4-3.2v-3.1L11.3 9.7A1 1 0 0 1 11 9V7a1 1 0 0 1 2 0v1.59l.41.41H16V6.48l-4-3.2z" clipRule="evenodd" />
    </IconBase>
  ))
);

CoolSBold.displayName = 'CoolSBold';

// Triple export pattern (lucide-react style)
export { CoolSBold, CoolSBold as CoolSBoldIcon, CoolSBold as SiCoolSBold };
export default CoolSBold;
export type { CoolSBoldProps };
