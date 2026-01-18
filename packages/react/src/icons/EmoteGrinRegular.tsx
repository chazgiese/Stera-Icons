import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type EmoteGrinRegularProps = Omit<IconBaseProps, 'children'>;

const EmoteGrinRegular = memo(
  forwardRef<SVGSVGElement, EmoteGrinRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M16 14.25a.75.75 0 0 1 .6 1.2 5.74 5.74 0 0 1-9.2 0 .75.75 0 0 1 .6-1.2zM8.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M15.5 8a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3" />
        <path fill="currentColor" fillRule="evenodd" d="M12 1.25a10.75 10.75 0 1 1 0 21.5 10.75 10.75 0 0 1 0-21.5m0 1.5a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5" clipRule="evenodd" />
    </IconBase>
  ))
);

EmoteGrinRegular.displayName = 'EmoteGrinRegular';

export { EmoteGrinRegular };
export type { EmoteGrinRegularProps };
