import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupRegularDuotone = memo(
  forwardRef<SVGSVGElement, CupRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cup-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.58 9.25a3.25 3.25 0 0 1-.08 6.5h-1l-.12-.01a7.8 7.8 0 0 1-6.8 4.01h-1.17a7.75 7.75 0 0 1-7.72-7.14l-.43-5.46c.07.62.58 1.03.99 1.27q.28.17.64.32l.3 3.75a6.25 6.25 0 0 0 6.22 5.76h1.18c3.26 0 5.97-2.5 6.23-5.76l.29-3.75q.36-.14.64-.32c.41-.24.92-.65.99-1.27zm-.27 3.36a8 8 0 0 1-.3 1.64h.49a1.75 1.75 0 0 0 0-3.5h-.04z" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" fillRule="evenodd" d="M11 4.25c2.25 0 4.32.23 5.84.6.75.2 1.42.43 1.91.73.45.26 1 .72 1 1.42s-.55 1.16-1 1.42q-.77.44-1.91.72c-1.52.38-3.59.61-5.84.61s-4.32-.23-5.84-.6a7 7 0 0 1-1.91-.73c-.45-.26-1-.72-1-1.42s.55-1.16 1-1.42q.77-.44 1.91-.72c1.52-.38 3.59-.61 5.84-.61m0 1.5c-2.17 0-4.1.22-5.47.56A6 6 0 0 0 3.82 7q.06.05.2.13.46.29 1.5.56c1.38.34 3.31.56 5.48.56s4.1-.22 5.47-.56A6 6 0 0 0 18.18 7l-.2-.13a6 6 0 0 0-1.5-.56c-1.38-.34-3.31-.56-5.48-.56" clipRule="evenodd" />
    </IconBase>
  ))
);

CupRegularDuotone.displayName = 'CupRegularDuotone';

// Triple export pattern (lucide-react style)
export { CupRegularDuotone, CupRegularDuotone as CupRegularDuotoneIcon, CupRegularDuotone as SiCupRegularDuotone };
export default CupRegularDuotone;
export type { CupRegularDuotoneProps };
