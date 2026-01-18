import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock11BoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11BoldDuotone = memo(
  forwardRef<SVGSVGElement, Clock11BoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6.09l-.01.04a1 1 0 0 1-.08.3l-.02.02q0 .03-.03.05l-.02.04-.2.22-.03.03-.04.03-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.05.01-.05.02h-.06l-.03.01H12L12 13h-.02l-.21-.03-.04-.01-.07-.02h-.02l-.06-.04-.04-.01-.03-.02-.06-.04h-.02l-.2-.19-.02-.02q0-.02-.03-.05l-.03-.05-.02-.02-2-3.46a1 1 0 0 1 1.74-1l.13.23V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock11BoldDuotone.displayName = 'Clock11BoldDuotone';

export { Clock11BoldDuotone };
export type { Clock11BoldDuotoneProps };
