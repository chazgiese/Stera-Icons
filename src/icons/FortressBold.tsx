import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type FortressBoldProps = Omit<IconBaseProps, 'children'>;

const FortressBold = memo(
  forwardRef<SVGSVGElement, FortressBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="fortress-bold" {...props}>
      <path fill="currentColor" d="M6 8.5a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1M18 8.5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-2 0V9.5a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M4.14 3.01a1 1 0 0 1 .75.54L5.62 5h.76l.73-1.45.07-.12A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2a1 1 0 0 1 .82.43l.07.12.73 1.45h.76l.73-1.45a1 1 0 0 1 .75-.54L20 3h2a1 1 0 0 1 1 1v15a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2v-2a2 2 0 1 0-4 0v2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2V4a1 1 0 0 1 1-1h2zM3 19h5v-2a4 4 0 0 1 8 0v2h5V5h-.38l-.73 1.45A1 1 0 0 1 19 7h-2a1 1 0 0 1-.9-.55L15.39 5H15v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5h-.38l-.73 1.45A1 1 0 0 1 7 7H5a1 1 0 0 1-.9-.55L3.39 5H3z" clipRule="evenodd" />
    </IconBase>
  ))
);

FortressBold.displayName = 'FortressBold';

// Triple export pattern (lucide-react style)
export { FortressBold, FortressBold as FortressBoldIcon, FortressBold as SiFortressBold };
export default FortressBold;
export type { FortressBoldProps };
