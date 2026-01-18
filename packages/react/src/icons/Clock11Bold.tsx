import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type Clock11BoldProps = Omit<IconBaseProps, 'children'>;

const Clock11Bold = memo(
  forwardRef<SVGSVGElement, Clock11BoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M12 5a1 1 0 0 1 1 1v6.09l-.01.04a1 1 0 0 1-.09.3l-.01.02-.05.1-.02.03-.18.18-.02.02-.05.04-.04.03-.03.02h-.02l-.03.02-.05.03-.06.02-.03.01-.06.02-.1.02h-.14L12 13h-.09l-.04-.01-.1-.02h-.04l-.07-.03h-.02l-.07-.04-.02-.01-.1-.05-.03-.02-.05-.04-.03-.03-.04-.03-.07-.08-.02-.02q0-.02-.03-.05l-.03-.05-.02-.02-2-3.46a1 1 0 0 1 1.74-1l.13.23V6a1 1 0 0 1 1-1" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1a11 11 0 1 1 0 22 11 11 0 0 1 0-22m0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18" clipRule="evenodd" />
    </IconBase>
  ))
);

Clock11Bold.displayName = 'Clock11Bold';

export { Clock11Bold };
export type { Clock11BoldProps };
