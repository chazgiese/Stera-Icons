import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock10FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock10FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock10FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v4.27L9.04 9.13a1 1 0 0 0-1 1.74l3.46 2 .1.05.05.01.04.02.04.01.06.02h.02l.08.01h.1L12 13h.02l.22-.03h.03l.23-.1.04-.03.05-.03.03-.03.07-.06.04-.04.03-.03A1 1 0 0 0 13 12V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.24.65l-.03.03-.04.04-.03.03-.12.1-.04.01a1 1 0 0 1-.32.12h-.04l-.12.02h-.13l-.08-.02h-.02l-.15-.05-.04-.01-.1-.05-3.47-2a1 1 0 0 1 1-1.74L11 10.27V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock10FillDuotone.displayName = 'Clock10FillDuotone';

export { Clock10FillDuotone };
export type { Clock10FillDuotoneProps };
