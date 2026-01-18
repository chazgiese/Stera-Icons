import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock1FillProps = Omit<IconBaseProps, 'children'>;

const Clock1Fill = memo(
  forwardRef<SVGSVGElement, Clock1FillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 4a1 1 0 0 0-1 1v6.09l.01.04a1 1 0 0 0 .09.3v.02l.06.1.02.03.18.18.02.02.05.04.04.03.03.02.05.02.05.03.06.02.03.01.06.02.1.02h.14L12 13h.09l.04-.01.1-.02h.04l.07-.03h.02l.07-.04.02-.01.05-.02.04-.03.04-.02.18-.18.02-.02.04-.05.03-.05.02-.02 2-3.46a1 1 0 0 0-1.74-1l-.13.23V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock1Fill.displayName = 'Clock1Fill';

export { Clock1Fill };
export type { Clock1FillProps };
