import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CupRegularProps = Omit<IconBaseProps, 'children'>;

const CupRegular = memo(
  forwardRef<SVGSVGElement, CupRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cup" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M10.5 3.25c2.39 0 4.57.23 6.18.6.8.2 1.5.43 2.02.72.45.25 1.05.7 1.05 1.43v.14l-.16 2.11a3.25 3.25 0 0 1-.09 6.5h-.47c-.8 3.46-3.9 6-7.55 6H9.52a7.75 7.75 0 0 1-7.73-7.2l-.53-7.4v-.1L1.24 6c0-.73.6-1.18 1.05-1.43a8 8 0 0 1 2.02-.71c1.6-.38 3.8-.61 6.18-.61m7.63 4.45q-.64.26-1.45.44c-1.6.38-3.8.61-6.18.61-2.39 0-4.57-.23-6.18-.6q-.82-.2-1.45-.45l.41 5.75a6.25 6.25 0 0 0 6.24 5.8h1.96c3.28 0 6-2.53 6.24-5.8zm1.1 5.55h.27a1.75 1.75 0 0 0 0-3.5h-.02zm-8.73-8.5c-2.3 0-4.37.22-5.84.57A7 7 0 0 0 2.84 6l.2.12q.51.31 1.62.56c1.47.35 3.53.57 5.84.57 2.3 0 4.37-.22 5.84-.57A7 7 0 0 0 18.16 6q-.05-.05-.2-.12-.51-.31-1.62-.56a27 27 0 0 0-5.84-.57" clipRule="evenodd" />
    </IconBase>
  ))
);

CupRegular.displayName = 'CupRegular';

// Triple export pattern (lucide-react style)
export { CupRegular, CupRegular as CupRegularIcon, CupRegular as SiCupRegular };
export default CupRegular;
export type { CupRegularProps };
