import { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

import LevelUpModal from "../components/LevelUpModal";

import challenges from "../../challenges.json";

interface ChallengesContextProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface Challenge {
  type: "body" | "eye";
  description: string;
  exp: number;
}

interface ChallengesContext {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  experienceToNextLevel: number;
  levelUp: () => void;
  closeModal: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
}

const ChallengesContext = createContext({} as ChallengesContext);

export function ChallengesContextProvider({
  children,
  ...rest
}: ChallengesContextProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );
  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 5, 2);

  function levelUp() {
    setLevel(level + 1);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];

    setActiveChallenge(challenge);

    const notificationSound = new Audio("/notification.mp3");
    notificationSound.play();

    if (Notification.permission === "granted") {
      new Notification("Cycle Finished! \u{1F389}", {
        body: `New challenge worth ${challenge.exp} experience!`,
      });
    }
  }

  function resetChallenge() {
    setActiveChallenge(null);
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return;
    }

    const { exp } = activeChallenge;

    let finalExperience = currentExperience + exp;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience = finalExperience - experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        activeChallenge,
        experienceToNextLevel,
        levelUp,
        closeModal,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {isModalOpen ? (
        <>
          <div style={{ filter: "blur(7.5px)" }}>{children}</div>
          <LevelUpModal />
        </>
      ) : (
        <>{children}</>
      )}
    </ChallengesContext.Provider>
  );
}

export default ChallengesContext;
