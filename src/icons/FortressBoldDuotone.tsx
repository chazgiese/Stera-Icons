import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FortressBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const FortressBoldDuotone = memo(
  forwardRef<SVGSVGElement, FortressBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="fortress-bold-duotone" {...props}>
      <path d="M4.14 3.01a1 1 0 0 1 .75.54L5.62 5h.76l.73-1.45.07-.12A1 1 0 0 1 8 3h2a1 1 0 0 1 1 1v4h2V4a1 1 0 0 1 1-1h2a1 1 0 0 1 .82.43l.07.12.73 1.45h.76l.73-1.45a1 1 0 0 1 .75-.54L20 3h2a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V5h-.38l-.73 1.45A1 1 0 0 1 19 7h-2a1 1 0 0 1-.9-.55L15.39 5H15v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5h-.38l-.73 1.45A1 1 0 0 1 7 7H5a1 1 0 0 1-.9-.55L3.39 5H3v15a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1h2z" opacity={.4} />
        <path d="M12 13a4 4 0 0 1 4 4v2h7a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2v-2a2 2 0 1 0-4 0v2a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h7v-2a4 4 0 0 1 4-4M6 8.5a1 1 0 0 1 1 1V11a1 1 0 1 1-2 0V9.5a1 1 0 0 1 1-1M18 8.5a1 1 0 0 1 1 1v1.6a1 1 0 0 1-2 0V9.5a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

FortressBoldDuotone.displayName = 'FortressBoldDuotone';

// Triple export pattern (lucide-react style)
export { FortressBoldDuotone, FortressBoldDuotone as FortressBoldDuotoneIcon, FortressBoldDuotone as SiFortressBoldDuotone };
export default FortressBoldDuotone;
export type { FortressBoldDuotoneProps };
