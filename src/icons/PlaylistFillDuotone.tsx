import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PlaylistFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const PlaylistFillDuotone = memo(
  forwardRef<SVGSVGElement, PlaylistFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="playlist-fill-duotone" {...props}>
      <path d="M12 15a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM12 11a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2zM22 7a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2zM22 3a1 1 0 1 1 0 2H2a1 1 0 0 1 0-2z" opacity={0.4} />
        <path fill="currentColor" d="M15 12.9a1.5 1.5 0 0 1 2.1-1.38l.19.1 5.04 3.1a1.5 1.5 0 0 1 0 2.56l-5.04 3.1A1.5 1.5 0 0 1 15 19.11z" />
    </IconBase>
  ))
);

PlaylistFillDuotone.displayName = 'PlaylistFillDuotone';

// Triple export pattern (lucide-react style)
export { PlaylistFillDuotone, PlaylistFillDuotone as PlaylistFillDuotoneIcon, PlaylistFillDuotone as SiPlaylistFillDuotone };
export default PlaylistFillDuotone;
export type { PlaylistFillDuotoneProps };
