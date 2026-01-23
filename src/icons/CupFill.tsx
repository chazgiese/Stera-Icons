import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupFillProps = Omit<IconBaseProps, 'children'>;

const CupFill = memo(
  forwardRef<SVGSVGElement, CupFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="cup-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.5 3c2.4 0 4.6.23 6.24.61.8.2 1.53.43 2.08.74C19.28 4.6 20 5.12 20 6l-.01.18-.13 1.84A3.5 3.5 0 0 1 19.5 15h-.27a8 8 0 0 1-7.75 6H9.52a8 8 0 0 1-7.98-7.43L1 6.17 1 6c0-.88.72-1.4 1.18-1.65.55-.3 1.27-.55 2.08-.74C5.9 3.23 8.1 3 10.5 3m9 10a1.5 1.5 0 0 0 .21-2.98zm-9-8c-2.3 0-4.34.22-5.78.56q-.9.22-1.37.44.48.23 1.4.45c1.44.33 3.47.55 5.75.55s4.31-.22 5.75-.55q.92-.23 1.4-.45a8 8 0 0 0-1.37-.44A27 27 0 0 0 10.5 5" clipRule="evenodd" />
    </IconBase>
  ))
);

CupFill.displayName = 'CupFill';

// Triple export pattern (lucide-react style)
export { CupFill, CupFill as CupFillIcon, CupFill as SiCupFill };
export default CupFill;
export type { CupFillProps };
