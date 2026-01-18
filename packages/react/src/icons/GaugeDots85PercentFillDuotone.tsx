import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type GaugeDots85PercentFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const GaugeDots85PercentFillDuotone = memo(
  forwardRef<SVGSVGElement, GaugeDots85PercentFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5M7.4 15.1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 10a2 2 0 1 0 .08 4c.5-.04 2.3-.3 3.91-.54l2.9-.43.2-.03h.04l.02-.01a1 1 0 0 0 0-1.98h-.07q-.05-.03-.2-.04L16 10.54a105 105 0 0 0-3.91-.54zm-6.5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m1.9-4.6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m9.2 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M12 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M7.4 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 15.1a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12.08 10c.5.04 2.3.3 3.91.54l2.9.43.2.03h.04l.02.01a1 1 0 0 1 0 1.98h-.07q-.05.03-.2.04l-2.89.43A105 105 0 0 1 12 14a2 2 0 0 1 0-4zM5.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M7.4 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.6 5.9a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M12 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
    </IconBase>
  ))
);

GaugeDots85PercentFillDuotone.displayName = 'GaugeDots85PercentFillDuotone';

export { GaugeDots85PercentFillDuotone };
export type { GaugeDots85PercentFillDuotoneProps };
