import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type PlaylistFillProps = Omit<IconBaseProps, 'children'>;

const PlaylistFill = memo(
  forwardRef<SVGSVGElement, PlaylistFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M15 12.9a1.5 1.5 0 0 1 2.1-1.38l.19.1 5.04 3.1a1.5 1.5 0 0 1 0 2.56l-5.04 3.1A1.5 1.5 0 0 1 15 19.11zM12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" />
    </IconBase>
  ))
);

PlaylistFill.displayName = 'PlaylistFill';

// Triple export pattern (lucide-react style)
export { PlaylistFill, PlaylistFill as PlaylistFillIcon, PlaylistFill as SiPlaylistFill };
export type { PlaylistFillProps };
