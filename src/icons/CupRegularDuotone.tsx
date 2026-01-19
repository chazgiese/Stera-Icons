import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CupRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const CupRegularDuotone = memo(
  forwardRef<SVGSVGElement, CupRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="cup-duotone" {...props}>
      <path fill="currentColor" d="M19.21 13.55a7.75 7.75 0 0 1-7.73 7.2H9.52a7.75 7.75 0 0 1-7.73-7.2l-.53-7.4c.07.64.62 1.05 1.04 1.28q.26.15.57.27l.41 5.75a6.25 6.25 0 0 0 6.24 5.8h1.96c3.28 0 6-2.53 6.24-5.8l.4-5.75q.31-.12.58-.27c.42-.23.97-.64 1.04-1.29z" opacity={.4} />
        <path fill="currentColor" d="M19.6 8.25a3.25 3.25 0 0 1-.1 6.5h-.47q.14-.59.18-1.2l.02-.3h.27a1.75 1.75 0 0 0 0-3.5h-.02z" />
        <path fill="currentColor" fillRule="evenodd" d="M10.5 3.25c2.39 0 4.57.23 6.18.6.8.2 1.5.43 2.02.72.45.25 1.05.7 1.05 1.43s-.6 1.18-1.05 1.43c-.52.3-1.22.53-2.02.71-1.6.38-3.8.61-6.18.61-2.39 0-4.57-.23-6.18-.6-.8-.2-1.5-.43-2.02-.72-.45-.25-1.05-.7-1.05-1.43s.6-1.18 1.05-1.43a8 8 0 0 1 2.02-.71c1.6-.38 3.8-.61 6.18-.61m0 1.5c-2.3 0-4.37.22-5.84.57A7 7 0 0 0 2.84 6l.2.12q.51.31 1.62.56c1.47.35 3.53.57 5.84.57 2.3 0 4.37-.22 5.84-.57A7 7 0 0 0 18.16 6q-.05-.05-.2-.12-.51-.31-1.62-.56a27 27 0 0 0-5.84-.57" clipRule="evenodd" />
    </IconBase>
  ))
);

CupRegularDuotone.displayName = 'CupRegularDuotone';

// Triple export pattern (lucide-react style)
export { CupRegularDuotone, CupRegularDuotone as CupRegularDuotoneIcon, CupRegularDuotone as SiCupRegularDuotone };
export type { CupRegularDuotoneProps };
