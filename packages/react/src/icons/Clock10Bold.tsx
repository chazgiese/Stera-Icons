import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock10BoldProps = Omit<IconBaseProps, 'children'>;

const Clock10Bold = memo(
  forwardRef<SVGSVGElement, Clock10BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6a1 1 0 0 1-.24.65l-.03.03-.04.04-.07.06-.03.03-.05.03-.04.02-.23.1-.03.01-.22.03h-.13l-.08-.02h-.02l-.06-.02h-.04l-.04-.03-.05-.01-.1-.05-3.46-2a1 1 0 0 1 1-1.74L11 10.27V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock10Bold.displayName = 'Clock10Bold';

export { Clock10Bold };
export type { Clock10BoldProps };
