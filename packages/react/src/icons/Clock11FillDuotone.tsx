import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock11FillDuotoneProps = Omit<IconBaseProps, 'children'>;

const Clock11FillDuotone = memo(
  forwardRef<SVGSVGElement, Clock11FillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v2.27l-.13-.23a1 1 0 0 0-1.74 1l2 3.46.02.02.03.05.03.05.02.02.07.08q.03 0 .04.03l.03.03.05.04.04.02.09.05.02.01.07.03.02.01.07.02.04.01.1.02h.11L12 13h.12l.04-.01.1-.02.05-.02.03-.01.06-.02.05-.03.03-.02h.02l.03-.02.04-.03.05-.04.02-.02.18-.18.02-.04.05-.09.01-.02a1 1 0 0 0 .09-.3v-.11L13 12V6a1 1 0 0 0-1-1" clipRule="evenodd" opacity={.4} />
        <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6.09l-.01.04a1 1 0 0 1-.08.3l-.02.02q0 .03-.03.05l-.02.04-.2.22-.03.03-.04.03-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.05.01-.05.02h-.06l-.03.01H12L12 13h-.02l-.21-.03-.04-.01-.07-.02h-.02l-.06-.04-.04-.01-.03-.02-.06-.04h-.02l-.2-.19-.02-.02q0-.02-.03-.05l-.03-.05-.02-.02-2-3.46a1 1 0 0 1 1.74-1l.13.23V6a1 1 0 0 1 1-1" />
    </IconBase>
  ))
);

Clock11FillDuotone.displayName = 'Clock11FillDuotone';

export { Clock11FillDuotone };
export type { Clock11FillDuotoneProps };
