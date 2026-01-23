import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupBoldDuotone = memo(
  forwardRef<SVGSVGElement, CupBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cup-bold-duotone" {...props}>
      <path fill="currentColor" d="m19.5 13-.04.57A8 8 0 0 1 11.48 21H9.52a8 8 0 0 1-7.98-7.43L1 6.17c.09.78.74 1.24 1.17 1.48q.42.24.97.42l.38 5.36A6 6 0 0 0 9.52 19h1.96a6 6 0 0 0 5.99-5.57l.38-5.36q.55-.18.97-.42c.43-.24 1.08-.7 1.17-1.47z" opacity={.4} />
        <path fill="currentColor" d="M19.86 8.02A3.5 3.5 0 0 1 19.5 15h-.27q.18-.7.23-1.43l.04-.57a1.5 1.5 0 0 0 .21-2.98z" />
        <path fill="currentColor" fillRule="evenodd" d="M10.5 3c2.4 0 4.6.23 6.24.61.8.2 1.53.43 2.08.74C19.28 4.6 20 5.12 20 6s-.72 1.4-1.18 1.65q-.84.45-2.08.74C15.1 8.77 12.9 9 10.5 9s-4.6-.23-6.24-.61a8 8 0 0 1-2.08-.74C1.72 7.4 1 6.88 1 6s.72-1.4 1.18-1.65c.55-.3 1.27-.55 2.08-.74C5.9 3.23 8.1 3 10.5 3m0 2c-2.3 0-4.34.22-5.78.56q-.9.22-1.38.44.48.23 1.38.44C6.16 6.78 8.2 7 10.5 7s4.34-.22 5.78-.56A8 8 0 0 0 17.65 6a8 8 0 0 0-1.37-.44A27 27 0 0 0 10.5 5" clipRule="evenodd" />
    </IconBase>
  ))
);

CupBoldDuotone.displayName = 'CupBoldDuotone';

// Triple export pattern (lucide-react style)
export { CupBoldDuotone, CupBoldDuotone as CupBoldDuotoneIcon, CupBoldDuotone as SiCupBoldDuotone };
export default CupBoldDuotone;
export type { CupBoldDuotoneProps };
